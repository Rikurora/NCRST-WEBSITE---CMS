<?php

namespace App\Controller;

use App\Entity\AiInitiative;
use App\Repository\AiInitiativeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/api/ai-initiatives')]
class AiInitiativeController extends AbstractController
{
    private $entityManager;
    private $serializer;
    private $repository;

    public function __construct(
        EntityManagerInterface $entityManager,
        SerializerInterface $serializer,
        AiInitiativeRepository $repository
    ) {
        $this->entityManager = $entityManager;
        $this->serializer = $serializer;
        $this->repository = $repository;
    }

    #[Route('', name: 'ai_initiative_index', methods: ['GET'])]
    public function index(): JsonResponse
    {
        $initiatives = $this->repository->findAll();
        return $this->json($initiatives);
    }

    #[Route('', name: 'ai_initiative_new', methods: ['POST'])]
    public function new(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        
        $initiative = new AiInitiative();
        $initiative->setTitle($data['title']);
        $initiative->setDescription($data['description']);
        $initiative->setStatus($data['status']);
        $initiative->setStartDate(new \DateTime($data['startDate']));
        $initiative->setOutcomes($data['outcomes']);

        $this->entityManager->persist($initiative);
        $this->entityManager->flush();

        return $this->json($initiative, Response::HTTP_CREATED);
    }

    #[Route('/{id}', name: 'ai_initiative_show', methods: ['GET'])]
    public function show(AiInitiative $initiative): JsonResponse
    {
        return $this->json($initiative);
    }

    #[Route('/{id}', name: 'ai_initiative_edit', methods: ['PUT'])]
    public function edit(Request $request, AiInitiative $initiative): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $initiative->setTitle($data['title']);
        $initiative->setDescription($data['description']);
        $initiative->setStatus($data['status']);
        $initiative->setStartDate(new \DateTime($data['startDate']));
        $initiative->setOutcomes($data['outcomes']);

        $this->entityManager->flush();

        return $this->json($initiative);
    }

    #[Route('/{id}', name: 'ai_initiative_delete', methods: ['DELETE'])]
    public function delete(AiInitiative $initiative): JsonResponse
    {
        $this->entityManager->remove($initiative);
        $this->entityManager->flush();

        return $this->json(null, Response::HTTP_NO_CONTENT);
    }
} 