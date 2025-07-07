<?php

namespace App\Controller;

use App\Entity\Document;
use App\Repository\DocumentRepository;
use App\Repository\ResourceCategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/api')]
class DocumentController extends AbstractController
{
    private $entityManager;
    private $serializer;
    private $documentRepository;
    private $categoryRepository;

    public function __construct(
        EntityManagerInterface $entityManager,
        SerializerInterface $serializer,
        DocumentRepository $documentRepository,
        ResourceCategoryRepository $categoryRepository
    ) {
        $this->entityManager = $entityManager;
        $this->serializer = $serializer;
        $this->documentRepository = $documentRepository;
        $this->categoryRepository = $categoryRepository;
    }

    #[Route('/documents', name: 'document_index', methods: ['GET'])]
    public function index(): JsonResponse
    {
        $documents = $this->documentRepository->findAll();
        return $this->json($documents);
    }

    #[Route('/upload', name: 'document_upload', methods: ['POST'])]
    public function upload(Request $request): JsonResponse
    {
        $file = $request->files->get('file');
        
        if (!$file) {
            return $this->json(['error' => 'No file uploaded'], Response::HTTP_BAD_REQUEST);
        }

        // Generate unique filename
        $fileName = md5(uniqid()) . '.' . $file->getClientOriginalExtension();
        
        // Move file to uploads directory
        try {
            $file->move(
                $this->getParameter('uploads_directory'),
                $fileName
            );
        } catch (\Exception $e) {
            return $this->json(['error' => 'Failed to upload file'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        // Return the file URL
        return $this->json([
            'fileUrl' => '/uploads/' . $fileName
        ]);
    }

    #[Route('/documents', name: 'document_new', methods: ['POST'])]
    public function new(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        
        $document = new Document();
        $document->setTitle($data['title']);
        $document->setDescription($data['description']);
        
        // Set category
        $category = $this->categoryRepository->find($data['categoryId']);
        if (!$category) {
            return $this->json(['error' => 'Category not found'], Response::HTTP_BAD_REQUEST);
        }
        $document->setCategory($category);
        
        $document->setFileUrl($data['fileUrl']);
        $document->setFileType($data['fileType']);
        $document->setFileSize($data['fileSize']);
        $document->setUploadDate(new \DateTime());
        $document->setIsPublic($data['isPublic']);

        $this->entityManager->persist($document);
        $this->entityManager->flush();

        return $this->json($document, Response::HTTP_CREATED);
    }

    #[Route('/documents/{id}', name: 'document_show', methods: ['GET'])]
    public function show(Document $document): JsonResponse
    {
        return $this->json($document);
    }

    #[Route('/documents/{id}', name: 'document_edit', methods: ['PUT'])]
    public function edit(Request $request, Document $document): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $document->setTitle($data['title']);
        $document->setDescription($data['description']);
        
        // Update category if changed
        if (isset($data['categoryId'])) {
            $category = $this->categoryRepository->find($data['categoryId']);
            if (!$category) {
                return $this->json(['error' => 'Category not found'], Response::HTTP_BAD_REQUEST);
            }
            $document->setCategory($category);
        }
        
        // Update file information if new file uploaded
        if (isset($data['fileUrl'])) {
            $document->setFileUrl($data['fileUrl']);
            $document->setFileType($data['fileType']);
            $document->setFileSize($data['fileSize']);
            $document->setUploadDate(new \DateTime());
        }

        $document->setIsPublic($data['isPublic']);

        $this->entityManager->flush();

        return $this->json($document);
    }

    #[Route('/documents/{id}', name: 'document_delete', methods: ['DELETE'])]
    public function delete(Document $document): JsonResponse
    {
        // Delete the actual file
        $filePath = $this->getParameter('uploads_directory') . '/' . basename($document->getFileUrl());
        if (file_exists($filePath)) {
            unlink($filePath);
        }

        $this->entityManager->remove($document);
        $this->entityManager->flush();

        return $this->json(null, Response::HTTP_NO_CONTENT);
    }
} 