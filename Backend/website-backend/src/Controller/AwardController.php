<?php

namespace App\Controller;

use App\Entity\Award;
use App\Repository\AwardRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/api/awards')]
class AwardController extends AbstractController
{
    private $entityManager;
    private $serializer;
    private $repository;

    public function __construct(
        EntityManagerInterface $entityManager,
        SerializerInterface $serializer,
        AwardRepository $repository
    ) {
        $this->entityManager = $entityManager;
        $this->serializer = $serializer;
        $this->repository = $repository;
    }

    #[Route('', name: 'award_index', methods: ['GET'])]
    public function index(): JsonResponse
    {
        $awards = $this->repository->findAll();
        return $this->json($awards);
    }

    #[Route('', name: 'award_new', methods: ['POST'])]
    public function new(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        
        $award = new Award();
        $award->setTitle($data['title']);
        $award->setRecipient($data['recipient']);
        $award->setDescription($data['description']);
        $award->setDate(new \DateTime($data['date']));
        $award->setCategory($data['category']);

        $this->entityManager->persist($award);
        $this->entityManager->flush();

        return $this->json($award, Response::HTTP_CREATED);
    }

    #[Route('/{id}', name: 'award_show', methods: ['GET'])]
    public function show(Award $award): JsonResponse
    {
        return $this->json($award);
    }

    #[Route('/{id}', name: 'award_edit', methods: ['PUT'])]
    public function edit(Request $request, Award $award): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $award->setTitle($data['title']);
        $award->setRecipient($data['recipient']);
        $award->setDescription($data['description']);
        $award->setDate(new \DateTime($data['date']));
        $award->setCategory($data['category']);

        $this->entityManager->flush();

        return $this->json($award);
    }

    #[Route('/{id}', name: 'award_delete', methods: ['DELETE'])]
    public function delete(Award $award): JsonResponse
    {
        $this->entityManager->remove($award);
        $this->entityManager->flush();

        return $this->json(null, Response::HTTP_NO_CONTENT);
    }
} 