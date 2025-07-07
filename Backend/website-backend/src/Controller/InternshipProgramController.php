<?php

namespace App\Controller;

use App\Entity\InternshipProgram;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[Route('/api/internship-programs')]
class InternshipProgramController extends AbstractController
{
    private $entityManager;
    private $validator;

    public function __construct(EntityManagerInterface $entityManager, ValidatorInterface $validator)
    {
        $this->entityManager = $entityManager;
        $this->validator = $validator;
    }

    #[Route('', name: 'internship_program_index', methods: ['GET'])]
    public function index(): JsonResponse
    {
        $programs = $this->entityManager->getRepository(InternshipProgram::class)->findAll();
        $data = [];

        foreach ($programs as $program) {
            $data[] = [
                'id' => $program->getId(),
                'title' => $program->getTitle(),
                'department' => $program->getDepartment(),
                'description' => $program->getDescription(),
                'requirements' => $program->getRequirements(),
                'duration' => $program->getDuration(),
                'stipend' => $program->getStipend(),
                'status' => $program->getStatus(),
                'startDate' => $program->getStartDate()->format('Y-m-d'),
                'endDate' => $program->getEndDate()->format('Y-m-d'),
                'applicationDeadline' => $program->getApplicationDeadline()->format('Y-m-d'),
                'benefits' => $program->getBenefits(),
                'mentorName' => $program->getMentorName(),
                'mentorEmail' => $program->getMentorEmail(),
                'maxPositions' => $program->getMaxPositions(),
                'createdAt' => $program->getCreatedAt()->format('Y-m-d H:i:s'),
                'updatedAt' => $program->getUpdatedAt() ? $program->getUpdatedAt()->format('Y-m-d H:i:s') : null,
            ];
        }

        return new JsonResponse($data);
    }

    #[Route('', name: 'internship_program_create', methods: ['POST'])]
    public function create(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $program = new InternshipProgram();
        $program->setTitle($data['title']);
        $program->setDepartment($data['department']);
        $program->setDescription($data['description']);
        $program->setRequirements($data['requirements']);
        $program->setDuration($data['duration']);
        $program->setStipend($data['stipend']);
        $program->setStatus($data['status']);
        $program->setStartDate(new \DateTime($data['startDate']));
        $program->setEndDate(new \DateTime($data['endDate']));
        $program->setApplicationDeadline(new \DateTime($data['applicationDeadline']));
        $program->setBenefits($data['benefits']);
        $program->setMentorName($data['mentorName']);
        $program->setMentorEmail($data['mentorEmail']);
        $program->setMaxPositions($data['maxPositions']);

        $errors = $this->validator->validate($program);
        if (count($errors) > 0) {
            $errorMessages = [];
            foreach ($errors as $error) {
                $errorMessages[] = $error->getMessage();
            }
            return new JsonResponse(['errors' => $errorMessages], Response::HTTP_BAD_REQUEST);
        }

        $this->entityManager->persist($program);
        $this->entityManager->flush();

        return new JsonResponse([
            'id' => $program->getId(),
            'title' => $program->getTitle(),
            'department' => $program->getDepartment(),
            'description' => $program->getDescription(),
            'requirements' => $program->getRequirements(),
            'duration' => $program->getDuration(),
            'stipend' => $program->getStipend(),
            'status' => $program->getStatus(),
            'startDate' => $program->getStartDate()->format('Y-m-d'),
            'endDate' => $program->getEndDate()->format('Y-m-d'),
            'applicationDeadline' => $program->getApplicationDeadline()->format('Y-m-d'),
            'benefits' => $program->getBenefits(),
            'mentorName' => $program->getMentorName(),
            'mentorEmail' => $program->getMentorEmail(),
            'maxPositions' => $program->getMaxPositions(),
            'createdAt' => $program->getCreatedAt()->format('Y-m-d H:i:s'),
            'updatedAt' => $program->getUpdatedAt() ? $program->getUpdatedAt()->format('Y-m-d H:i:s') : null,
        ], Response::HTTP_CREATED);
    }

    #[Route('/{id}', name: 'internship_program_show', methods: ['GET'])]
    public function show(int $id): JsonResponse
    {
        $program = $this->entityManager->getRepository(InternshipProgram::class)->find($id);

        if (!$program) {
            return new JsonResponse(['error' => 'Internship program not found'], Response::HTTP_NOT_FOUND);
        }

        return new JsonResponse([
            'id' => $program->getId(),
            'title' => $program->getTitle(),
            'department' => $program->getDepartment(),
            'description' => $program->getDescription(),
            'requirements' => $program->getRequirements(),
            'duration' => $program->getDuration(),
            'stipend' => $program->getStipend(),
            'status' => $program->getStatus(),
            'startDate' => $program->getStartDate()->format('Y-m-d'),
            'endDate' => $program->getEndDate()->format('Y-m-d'),
            'applicationDeadline' => $program->getApplicationDeadline()->format('Y-m-d'),
            'benefits' => $program->getBenefits(),
            'mentorName' => $program->getMentorName(),
            'mentorEmail' => $program->getMentorEmail(),
            'maxPositions' => $program->getMaxPositions(),
            'createdAt' => $program->getCreatedAt()->format('Y-m-d H:i:s'),
            'updatedAt' => $program->getUpdatedAt() ? $program->getUpdatedAt()->format('Y-m-d H:i:s') : null,
        ]);
    }

    #[Route('/{id}', name: 'internship_program_update', methods: ['PUT'])]
    public function update(Request $request, int $id): JsonResponse
    {
        $program = $this->entityManager->getRepository(InternshipProgram::class)->find($id);

        if (!$program) {
            return new JsonResponse(['error' => 'Internship program not found'], Response::HTTP_NOT_FOUND);
        }

        $data = json_decode($request->getContent(), true);

        $program->setTitle($data['title']);
        $program->setDepartment($data['department']);
        $program->setDescription($data['description']);
        $program->setRequirements($data['requirements']);
        $program->setDuration($data['duration']);
        $program->setStipend($data['stipend']);
        $program->setStatus($data['status']);
        $program->setStartDate(new \DateTime($data['startDate']));
        $program->setEndDate(new \DateTime($data['endDate']));
        $program->setApplicationDeadline(new \DateTime($data['applicationDeadline']));
        $program->setBenefits($data['benefits']);
        $program->setMentorName($data['mentorName']);
        $program->setMentorEmail($data['mentorEmail']);
        $program->setMaxPositions($data['maxPositions']);

        $errors = $this->validator->validate($program);
        if (count($errors) > 0) {
            $errorMessages = [];
            foreach ($errors as $error) {
                $errorMessages[] = $error->getMessage();
            }
            return new JsonResponse(['errors' => $errorMessages], Response::HTTP_BAD_REQUEST);
        }

        $this->entityManager->flush();

        return new JsonResponse([
            'id' => $program->getId(),
            'title' => $program->getTitle(),
            'department' => $program->getDepartment(),
            'description' => $program->getDescription(),
            'requirements' => $program->getRequirements(),
            'duration' => $program->getDuration(),
            'stipend' => $program->getStipend(),
            'status' => $program->getStatus(),
            'startDate' => $program->getStartDate()->format('Y-m-d'),
            'endDate' => $program->getEndDate()->format('Y-m-d'),
            'applicationDeadline' => $program->getApplicationDeadline()->format('Y-m-d'),
            'benefits' => $program->getBenefits(),
            'mentorName' => $program->getMentorName(),
            'mentorEmail' => $program->getMentorEmail(),
            'maxPositions' => $program->getMaxPositions(),
            'createdAt' => $program->getCreatedAt()->format('Y-m-d H:i:s'),
            'updatedAt' => $program->getUpdatedAt() ? $program->getUpdatedAt()->format('Y-m-d H:i:s') : null,
        ]);
    }

    #[Route('/{id}', name: 'internship_program_delete', methods: ['DELETE'])]
    public function delete(int $id): JsonResponse
    {
        $program = $this->entityManager->getRepository(InternshipProgram::class)->find($id);

        if (!$program) {
            return new JsonResponse(['error' => 'Internship program not found'], Response::HTTP_NOT_FOUND);
        }

        $this->entityManager->remove($program);
        $this->entityManager->flush();

        return new JsonResponse(null, Response::HTTP_NO_CONTENT);
    }
} 