<?php

namespace App\Controller;

use App\Entity\ScienceEvent;
use App\Repository\ScienceEventRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/api/science-events')]
class ScienceEventController extends AbstractController
{
    private $entityManager;
    private $serializer;
    private $repository;

    public function __construct(
        EntityManagerInterface $entityManager,
        SerializerInterface $serializer,
        ScienceEventRepository $repository
    ) {
        $this->entityManager = $entityManager;
        $this->serializer = $serializer;
        $this->repository = $repository;
    }

    #[Route('', name: 'science_event_index', methods: ['GET'])]
    public function index(): JsonResponse
    {
        $events = $this->repository->findAll();
        return $this->json($events);
    }

    #[Route('', name: 'science_event_new', methods: ['POST'])]
    public function new(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        
        $event = new ScienceEvent();
        $event->setTitle($data['title']);
        $event->setDescription($data['description']);
        $event->setType($data['type']);
        $event->setDate(new \DateTime($data['date']));
        $event->setLocation($data['location']);

        $this->entityManager->persist($event);
        $this->entityManager->flush();

        return $this->json($event, Response::HTTP_CREATED);
    }

    #[Route('/{id}', name: 'science_event_show', methods: ['GET'])]
    public function show(ScienceEvent $event): JsonResponse
    {
        return $this->json($event);
    }

    #[Route('/{id}', name: 'science_event_edit', methods: ['PUT'])]
    public function edit(Request $request, ScienceEvent $event): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $event->setTitle($data['title']);
        $event->setDescription($data['description']);
        $event->setType($data['type']);
        $event->setDate(new \DateTime($data['date']));
        $event->setLocation($data['location']);

        $this->entityManager->flush();

        return $this->json($event);
    }

    #[Route('/{id}', name: 'science_event_delete', methods: ['DELETE'])]
    public function delete(ScienceEvent $event): JsonResponse
    {
        $this->entityManager->remove($event);
        $this->entityManager->flush();

        return $this->json(null, Response::HTTP_NO_CONTENT);
    }
} 