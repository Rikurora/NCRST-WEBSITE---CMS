<?php

namespace App\Controller;

use App\Entity\Vacancy;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[Route('/api/vacancies')]
class VacancyController extends AbstractController
{
    private $entityManager;
    private $validator;

    public function __construct(EntityManagerInterface $entityManager, ValidatorInterface $validator)
    {
        $this->entityManager = $entityManager;
        $this->validator = $validator;
    }

    #[Route('', name: 'vacancy_index', methods: ['GET'])]
    public function index(): JsonResponse
    {
        $vacancies = $this->entityManager->getRepository(Vacancy::class)->findAll();
        $data = [];

        foreach ($vacancies as $vacancy) {
            $data[] = [
                'id' => $vacancy->getId(),
                'title' => $vacancy->getTitle(),
                'department' => $vacancy->getDepartment(),
                'description' => $vacancy->getDescription(),
                'requirements' => $vacancy->getRequirements(),
                'responsibilities' => $vacancy->getResponsibilities(),
                'type' => $vacancy->getType(),
                'status' => $vacancy->getStatus(),
                'location' => $vacancy->getLocation(),
                'salary' => $vacancy->getSalary(),
                'closingDate' => $vacancy->getClosingDate()->format('Y-m-d'),
                'contactEmail' => $vacancy->getContactEmail(),
                'createdAt' => $vacancy->getCreatedAt()->format('Y-m-d H:i:s'),
                'updatedAt' => $vacancy->getUpdatedAt() ? $vacancy->getUpdatedAt()->format('Y-m-d H:i:s') : null,
            ];
        }

        return new JsonResponse($data);
    }

    #[Route('', name: 'vacancy_create', methods: ['POST'])]
    public function create(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $vacancy = new Vacancy();
        $vacancy->setTitle($data['title']);
        $vacancy->setDepartment($data['department']);
        $vacancy->setDescription($data['description']);
        $vacancy->setRequirements($data['requirements']);
        $vacancy->setResponsibilities($data['responsibilities']);
        $vacancy->setType($data['type']);
        $vacancy->setStatus($data['status']);
        $vacancy->setLocation($data['location']);
        $vacancy->setSalary($data['salary']);
        $vacancy->setClosingDate(new \DateTime($data['closingDate']));
        $vacancy->setContactEmail($data['contactEmail']);

        $errors = $this->validator->validate($vacancy);
        if (count($errors) > 0) {
            $errorMessages = [];
            foreach ($errors as $error) {
                $errorMessages[] = $error->getMessage();
            }
            return new JsonResponse(['errors' => $errorMessages], Response::HTTP_BAD_REQUEST);
        }

        $this->entityManager->persist($vacancy);
        $this->entityManager->flush();

        return new JsonResponse([
            'id' => $vacancy->getId(),
            'title' => $vacancy->getTitle(),
            'department' => $vacancy->getDepartment(),
            'description' => $vacancy->getDescription(),
            'requirements' => $vacancy->getRequirements(),
            'responsibilities' => $vacancy->getResponsibilities(),
            'type' => $vacancy->getType(),
            'status' => $vacancy->getStatus(),
            'location' => $vacancy->getLocation(),
            'salary' => $vacancy->getSalary(),
            'closingDate' => $vacancy->getClosingDate()->format('Y-m-d'),
            'contactEmail' => $vacancy->getContactEmail(),
            'createdAt' => $vacancy->getCreatedAt()->format('Y-m-d H:i:s'),
            'updatedAt' => $vacancy->getUpdatedAt() ? $vacancy->getUpdatedAt()->format('Y-m-d H:i:s') : null,
        ], Response::HTTP_CREATED);
    }

    #[Route('/{id}', name: 'vacancy_show', methods: ['GET'])]
    public function show(int $id): JsonResponse
    {
        $vacancy = $this->entityManager->getRepository(Vacancy::class)->find($id);

        if (!$vacancy) {
            return new JsonResponse(['error' => 'Vacancy not found'], Response::HTTP_NOT_FOUND);
        }

        return new JsonResponse([
            'id' => $vacancy->getId(),
            'title' => $vacancy->getTitle(),
            'department' => $vacancy->getDepartment(),
            'description' => $vacancy->getDescription(),
            'requirements' => $vacancy->getRequirements(),
            'responsibilities' => $vacancy->getResponsibilities(),
            'type' => $vacancy->getType(),
            'status' => $vacancy->getStatus(),
            'location' => $vacancy->getLocation(),
            'salary' => $vacancy->getSalary(),
            'closingDate' => $vacancy->getClosingDate()->format('Y-m-d'),
            'contactEmail' => $vacancy->getContactEmail(),
            'createdAt' => $vacancy->getCreatedAt()->format('Y-m-d H:i:s'),
            'updatedAt' => $vacancy->getUpdatedAt() ? $vacancy->getUpdatedAt()->format('Y-m-d H:i:s') : null,
        ]);
    }

    #[Route('/{id}', name: 'vacancy_update', methods: ['PUT'])]
    public function update(Request $request, int $id): JsonResponse
    {
        $vacancy = $this->entityManager->getRepository(Vacancy::class)->find($id);

        if (!$vacancy) {
            return new JsonResponse(['error' => 'Vacancy not found'], Response::HTTP_NOT_FOUND);
        }

        $data = json_decode($request->getContent(), true);

        $vacancy->setTitle($data['title']);
        $vacancy->setDepartment($data['department']);
        $vacancy->setDescription($data['description']);
        $vacancy->setRequirements($data['requirements']);
        $vacancy->setResponsibilities($data['responsibilities']);
        $vacancy->setType($data['type']);
        $vacancy->setStatus($data['status']);
        $vacancy->setLocation($data['location']);
        $vacancy->setSalary($data['salary']);
        $vacancy->setClosingDate(new \DateTime($data['closingDate']));
        $vacancy->setContactEmail($data['contactEmail']);

        $errors = $this->validator->validate($vacancy);
        if (count($errors) > 0) {
            $errorMessages = [];
            foreach ($errors as $error) {
                $errorMessages[] = $error->getMessage();
            }
            return new JsonResponse(['errors' => $errorMessages], Response::HTTP_BAD_REQUEST);
        }

        $this->entityManager->flush();

        return new JsonResponse([
            'id' => $vacancy->getId(),
            'title' => $vacancy->getTitle(),
            'department' => $vacancy->getDepartment(),
            'description' => $vacancy->getDescription(),
            'requirements' => $vacancy->getRequirements(),
            'responsibilities' => $vacancy->getResponsibilities(),
            'type' => $vacancy->getType(),
            'status' => $vacancy->getStatus(),
            'location' => $vacancy->getLocation(),
            'salary' => $vacancy->getSalary(),
            'closingDate' => $vacancy->getClosingDate()->format('Y-m-d'),
            'contactEmail' => $vacancy->getContactEmail(),
            'createdAt' => $vacancy->getCreatedAt()->format('Y-m-d H:i:s'),
            'updatedAt' => $vacancy->getUpdatedAt() ? $vacancy->getUpdatedAt()->format('Y-m-d H:i:s') : null,
        ]);
    }

    #[Route('/{id}', name: 'vacancy_delete', methods: ['DELETE'])]
    public function delete(int $id): JsonResponse
    {
        $vacancy = $this->entityManager->getRepository(Vacancy::class)->find($id);

        if (!$vacancy) {
            return new JsonResponse(['error' => 'Vacancy not found'], Response::HTTP_NOT_FOUND);
        }

        $this->entityManager->remove($vacancy);
        $this->entityManager->flush();

        return new JsonResponse(null, Response::HTTP_NO_CONTENT);
    }
} 