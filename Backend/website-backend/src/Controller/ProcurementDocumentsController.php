<?php

namespace App\Controller;

use App\Entity\ProcurementDocument;
use App\Form\ProcurementDocumentType;
use App\Repository\ProcurementDocumentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/admin/procurement-documents')]
class ProcurementDocumentController extends AbstractController
{
    #[Route('/', name: 'app_procurement_document_index', methods: ['GET'])]
    public function index(ProcurementDocumentRepository $procurementDocumentRepository): Response
    {
        return $this->render('procurement_documents/index.html.twig', [
            'procurement_documents' => $procurementDocumentRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_procurement_document_new', methods: ['GET', 'POST'])]
    public function new(Request $request, ProcurementDocumentRepository $procurementDocumentRepository): Response
    {
        $procurementDocument = new ProcurementDocument();
        $form = $this->createForm(ProcurementDocumentType::class, $procurementDocument);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $procurementDocumentRepository->save($procurementDocument, true);

            return $this->redirectToRoute('app_procurement_document_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('procurement_documents/new.html.twig', [
            'procurement_document' => $procurementDocument,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_procurement_document_show', methods: ['GET'])]
    public function show(ProcurementDocument $procurementDocument): Response
    {
        return $this->render('procurement_documents/show.html.twig', [
            'procurement_document' => $procurementDocument,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_procurement_document_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, ProcurementDocument $procurementDocument, ProcurementDocumentRepository $procurementDocumentRepository): Response
    {
        $form = $this->createForm(ProcurementDocumentType::class, $procurementDocument);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $procurementDocumentRepository->save($procurementDocument, true);

            return $this->redirectToRoute('app_procurement_document_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('procurement_documents/edit.html.twig', [
            'procurement_document' => $procurementDocument,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_procurement_document_delete', methods: ['POST'])]
    public function delete(Request $request, ProcurementDocument $procurementDocument, ProcurementDocumentRepository $procurementDocumentRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$procurementDocument->getId(), $request->request->get('_token'))) {
            $procurementDocumentRepository->remove($procurementDocument, true);
        }

        return $this->redirectToRoute('app_procurement_document_index', [], Response::HTTP_SEE_OTHER);
    }
}
