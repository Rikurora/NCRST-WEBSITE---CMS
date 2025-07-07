<?php

namespace App\Controller;

use App\Entity\ResearchPermit;
use App\Form\ResearchPermitType;
use App\Repository\ResearchPermitRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/api/research-permits')]
class ResearchPermitController extends AbstractController
{
    private $entityManager;
    private $serializer;
    private $repository;

    public function __construct(
        EntityManagerInterface $entityManager,
        SerializerInterface $serializer,
        ResearchPermitRepository $repository
    ) {
        $this->entityManager = $entityManager;
        $this->serializer = $serializer;
        $this->repository = $repository;
    }

    #[Route('', name: 'research_permit_index', methods: ['GET'])]
    public function index(): JsonResponse
    {
        $permits = $this->repository->findAll();
        return $this->json($permits);
    }

    #[Route('', name: 'research_permit_new', methods: ['POST'])]
    public function new(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        
        $permit = new ResearchPermit();
        $permit->setTitle($data['title']);
        $permit->setDescription($data['description']);
        $permit->setStatus($data['status']);
        $permit->setSubmissionDate(new \DateTime($data['submissionDate']));
        $permit->setApplicant($data['applicant']);

        $this->entityManager->persist($permit);
        $this->entityManager->flush();

        return $this->json($permit, Response::HTTP_CREATED);
    }

    #[Route('/{id}', name: 'research_permit_show', methods: ['GET'])]
    public function show(ResearchPermit $permit): JsonResponse
    {
        return $this->json($permit);
    }

    #[Route('/{id}', name: 'research_permit_edit', methods: ['PUT'])]
    public function edit(Request $request, ResearchPermit $permit): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $permit->setTitle($data['title']);
        $permit->setDescription($data['description']);
        $permit->setStatus($data['status']);
        $permit->setSubmissionDate(new \DateTime($data['submissionDate']));
        $permit->setApplicant($data['applicant']);

        $this->entityManager->flush();

        return $this->json($permit);
    }

    #[Route('/{id}', name: 'research_permit_delete', methods: ['DELETE'])]
    public function delete(ResearchPermit $permit): JsonResponse
    {
        $this->entityManager->remove($permit);
        $this->entityManager->flush();

        return $this->json(null, Response::HTTP_NO_CONTENT);
    }
} 