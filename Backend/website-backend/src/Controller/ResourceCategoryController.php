<?php

namespace App\Controller;

use App\Entity\ResourceCategory;
use App\Repository\ResourceCategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\String\Slugger\SluggerInterface;

#[Route('/api/resource-categories')]
class ResourceCategoryController extends AbstractController
{
    private $entityManager;
    private $serializer;
    private $repository;
    private $slugger;

    public function __construct(
        EntityManagerInterface $entityManager,
        SerializerInterface $serializer,
        ResourceCategoryRepository $repository,
        SluggerInterface $slugger
    ) {
        $this->entityManager = $entityManager;
        $this->serializer = $serializer;
        $this->repository = $repository;
        $this->slugger = $slugger;
    }

    #[Route('', name: 'resource_category_index', methods: ['GET'])]
    public function index(): JsonResponse
    {
        $categories = $this->repository->findAll();
        return $this->json($categories);
    }

    #[Route('', name: 'resource_category_new', methods: ['POST'])]
    public function new(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        
        $category = new ResourceCategory();
        $category->setName($data['name']);
        $category->setDescription($data['description']);
        
        // Generate slug if not provided
        $slug = $data['slug'] ?? $this->slugger->slug($data['name'])->lower();
        $category->setSlug($slug);

        $this->entityManager->persist($category);
        $this->entityManager->flush();

        return $this->json($category, Response::HTTP_CREATED);
    }

    #[Route('/{id}', name: 'resource_category_show', methods: ['GET'])]
    public function show(ResourceCategory $category): JsonResponse
    {
        return $this->json($category);
    }

    #[Route('/{id}', name: 'resource_category_edit', methods: ['PUT'])]
    public function edit(Request $request, ResourceCategory $category): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $category->setName($data['name']);
        $category->setDescription($data['description']);
        
        // Update slug if provided, otherwise generate from name
        if (isset($data['slug'])) {
            $category->setSlug($data['slug']);
        } else {
            $category->setSlug($this->slugger->slug($data['name'])->lower());
        }

        $this->entityManager->flush();

        return $this->json($category);
    }

    #[Route('/{id}', name: 'resource_category_delete', methods: ['DELETE'])]
    public function delete(ResourceCategory $category): JsonResponse
    {
        // Check if category has documents
        if (!$category->getDocuments()->isEmpty()) {
            return $this->json(
                ['error' => 'Cannot delete category with associated documents'],
                Response::HTTP_BAD_REQUEST
            );
        }

        $this->entityManager->remove($category);
        $this->entityManager->flush();

        return $this->json(null, Response::HTTP_NO_CONTENT);
    }
} 