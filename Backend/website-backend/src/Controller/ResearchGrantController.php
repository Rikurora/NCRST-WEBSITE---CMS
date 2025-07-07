<?php

namespace App\Controller;

use App\Entity\ResearchGrant;
use App\Form\ResearchGrantType;
use App\Repository\ResearchGrantRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/api/research-grants')]
class ResearchGrantController extends AbstractController
{
    private $entityManager;
    private $serializer;
    private $repository;

    public function __construct(
        EntityManagerInterface $entityManager,
        SerializerInterface $serializer,
        ResearchGrantRepository $repository
    ) {
        $this->entityManager = $entityManager;
        $this->serializer = $serializer;
        $this->repository = $repository;
    }

    #[Route('', name: 'research_grant_index', methods: ['GET'])]
    public function index(): JsonResponse
    {
        $grants = $this->repository->findAll();
        return $this->json($grants);
    }

    #[Route('', name: 'research_grant_new', methods: ['POST'])]
    public function new(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        
        $grant = new ResearchGrant();
        $grant->setTitle($data['title']);
        $grant->setDescription($data['description']);
        $grant->setAmount($data['amount']);
        $grant->setDeadline(new \DateTime($data['deadline']));
        $grant->setRequirements($data['requirements']);

        $this->entityManager->persist($grant);
        $this->entityManager->flush();

        return $this->json($grant, Response::HTTP_CREATED);
    }

    #[Route('/{id}', name: 'research_grant_show', methods: ['GET'])]
    public function show(ResearchGrant $grant): JsonResponse
    {
        return $this->json($grant);
    }

    #[Route('/{id}', name: 'research_grant_edit', methods: ['PUT'])]
    public function edit(Request $request, ResearchGrant $grant): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $grant->setTitle($data['title']);
        $grant->setDescription($data['description']);
        $grant->setAmount($data['amount']);
        $grant->setDeadline(new \DateTime($data['deadline']));
        $grant->setRequirements($data['requirements']);

        $this->entityManager->flush();

        return $this->json($grant);
    }

    #[Route('/{id}', name: 'research_grant_delete', methods: ['DELETE'])]
    public function delete(ResearchGrant $grant): JsonResponse
    {
        $this->entityManager->remove($grant);
        $this->entityManager->flush();

        return $this->json(null, Response::HTTP_NO_CONTENT);
    }
} 