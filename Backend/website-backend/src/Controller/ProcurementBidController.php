<?php

namespace App\Controller;

use App\Entity\ProcurementBid;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[Route('/api/procurement-bids')]
class ProcurementBidController extends AbstractController
{
    private $entityManager;
    private $validator;

    public function __construct(EntityManagerInterface $entityManager, ValidatorInterface $validator)
    {
        $this->entityManager = $entityManager;
        $this->validator = $validator;
    }

    #[Route('', name: 'procurement_bid_index', methods: ['GET'])]
    public function index(): JsonResponse
    {
        $bids = $this->entityManager->getRepository(ProcurementBid::class)->findAll();
        $data = [];

        foreach ($bids as $bid) {
            $data[] = [
                'id' => $bid->getId(),
                'title' => $bid->getTitle(),
                'referenceNumber' => $bid->getReferenceNumber(),
                'description' => $bid->getDescription(),
                'status' => $bid->getStatus(),
                'submissionDeadline' => $bid->getSubmissionDeadline()->format('Y-m-d'),
                'estimatedBudget' => $bid->getEstimatedBudget(),
                'requirements' => $bid->getRequirements(),
                'contactPerson' => $bid->getContactPerson(),
                'contactEmail' => $bid->getContactEmail(),
                'createdAt' => $bid->getCreatedAt()->format('Y-m-d H:i:s'),
                'updatedAt' => $bid->getUpdatedAt() ? $bid->getUpdatedAt()->format('Y-m-d H:i:s') : null,
            ];
        }

        return new JsonResponse($data);
    }

    #[Route('', name: 'procurement_bid_create', methods: ['POST'])]
    public function create(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $bid = new ProcurementBid();
        $bid->setTitle($data['title']);
        $bid->setReferenceNumber($data['referenceNumber']);
        $bid->setDescription($data['description']);
        $bid->setStatus($data['status']);
        $bid->setSubmissionDeadline(new \DateTime($data['submissionDeadline']));
        $bid->setEstimatedBudget($data['estimatedBudget']);
        $bid->setRequirements($data['requirements']);
        $bid->setContactPerson($data['contactPerson']);
        $bid->setContactEmail($data['contactEmail']);

        $errors = $this->validator->validate($bid);
        if (count($errors) > 0) {
            $errorMessages = [];
            foreach ($errors as $error) {
                $errorMessages[] = $error->getMessage();
            }
            return new JsonResponse(['errors' => $errorMessages], Response::HTTP_BAD_REQUEST);
        }

        $this->entityManager->persist($bid);
        $this->entityManager->flush();

        return new JsonResponse([
            'id' => $bid->getId(),
            'title' => $bid->getTitle(),
            'referenceNumber' => $bid->getReferenceNumber(),
            'description' => $bid->getDescription(),
            'status' => $bid->getStatus(),
            'submissionDeadline' => $bid->getSubmissionDeadline()->format('Y-m-d'),
            'estimatedBudget' => $bid->getEstimatedBudget(),
            'requirements' => $bid->getRequirements(),
            'contactPerson' => $bid->getContactPerson(),
            'contactEmail' => $bid->getContactEmail(),
            'createdAt' => $bid->getCreatedAt()->format('Y-m-d H:i:s'),
            'updatedAt' => $bid->getUpdatedAt() ? $bid->getUpdatedAt()->format('Y-m-d H:i:s') : null,
        ], Response::HTTP_CREATED);
    }

    #[Route('/{id}', name: 'procurement_bid_show', methods: ['GET'])]
    public function show(int $id): JsonResponse
    {
        $bid = $this->entityManager->getRepository(ProcurementBid::class)->find($id);

        if (!$bid) {
            return new JsonResponse(['error' => 'Bid not found'], Response::HTTP_NOT_FOUND);
        }

        return new JsonResponse([
            'id' => $bid->getId(),
            'title' => $bid->getTitle(),
            'referenceNumber' => $bid->getReferenceNumber(),
            'description' => $bid->getDescription(),
            'status' => $bid->getStatus(),
            'submissionDeadline' => $bid->getSubmissionDeadline()->format('Y-m-d'),
            'estimatedBudget' => $bid->getEstimatedBudget(),
            'requirements' => $bid->getRequirements(),
            'contactPerson' => $bid->getContactPerson(),
            'contactEmail' => $bid->getContactEmail(),
            'createdAt' => $bid->getCreatedAt()->format('Y-m-d H:i:s'),
            'updatedAt' => $bid->getUpdatedAt() ? $bid->getUpdatedAt()->format('Y-m-d H:i:s') : null,
        ]);
    }

    #[Route('/{id}', name: 'procurement_bid_update', methods: ['PUT'])]
    public function update(Request $request, int $id): JsonResponse
    {
        $bid = $this->entityManager->getRepository(ProcurementBid::class)->find($id);

        if (!$bid) {
            return new JsonResponse(['error' => 'Bid not found'], Response::HTTP_NOT_FOUND);
        }

        $data = json_decode($request->getContent(), true);

        $bid->setTitle($data['title']);
        $bid->setReferenceNumber($data['referenceNumber']);
        $bid->setDescription($data['description']);
        $bid->setStatus($data['status']);
        $bid->setSubmissionDeadline(new \DateTime($data['submissionDeadline']));
        $bid->setEstimatedBudget($data['estimatedBudget']);
        $bid->setRequirements($data['requirements']);
        $bid->setContactPerson($data['contactPerson']);
        $bid->setContactEmail($data['contactEmail']);

        $errors = $this->validator->validate($bid);
        if (count($errors) > 0) {
            $errorMessages = [];
            foreach ($errors as $error) {
                $errorMessages[] = $error->getMessage();
            }
            return new JsonResponse(['errors' => $errorMessages], Response::HTTP_BAD_REQUEST);
        }

        $this->entityManager->flush();

        return new JsonResponse([
            'id' => $bid->getId(),
            'title' => $bid->getTitle(),
            'referenceNumber' => $bid->getReferenceNumber(),
            'description' => $bid->getDescription(),
            'status' => $bid->getStatus(),
            'submissionDeadline' => $bid->getSubmissionDeadline()->format('Y-m-d'),
            'estimatedBudget' => $bid->getEstimatedBudget(),
            'requirements' => $bid->getRequirements(),
            'contactPerson' => $bid->getContactPerson(),
            'contactEmail' => $bid->getContactEmail(),
            'createdAt' => $bid->getCreatedAt()->format('Y-m-d H:i:s'),
            'updatedAt' => $bid->getUpdatedAt() ? $bid->getUpdatedAt()->format('Y-m-d H:i:s') : null,
        ]);
    }

    #[Route('/{id}', name: 'procurement_bid_delete', methods: ['DELETE'])]
    public function delete(int $id): JsonResponse
    {
        $bid = $this->entityManager->getRepository(ProcurementBid::class)->find($id);

        if (!$bid) {
            return new JsonResponse(['error' => 'Bid not found'], Response::HTTP_NOT_FOUND);
        }

        $this->entityManager->remove($bid);
        $this->entityManager->flush();

        return new JsonResponse(null, Response::HTTP_NO_CONTENT);
    }
} 