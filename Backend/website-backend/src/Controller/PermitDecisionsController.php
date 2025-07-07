<?php

namespace App\Controller;

use App\Entity\PermitDecisions;
use App\Form\PermitDecisionsType;
use App\Repository\PermitDecisionsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/permit/decisions')]
class PermitDecisionsController extends AbstractController
{
    #[Route('/', name: 'app_permit_decisions_index', methods: ['GET'])]
    public function index(PermitDecisionsRepository $permitDecisionsRepository): Response
    {
        return $this->render('permit_decisions/index.html.twig', [
            'permit_decisions' => $permitDecisionsRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_permit_decisions_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $permitDecision = new PermitDecisions();
        $form = $this->createForm(PermitDecisionsType::class, $permitDecision);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($permitDecision);
            $entityManager->flush();

            return $this->redirectToRoute('app_permit_decisions_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('permit_decisions/new.html.twig', [
            'permit_decision' => $permitDecision,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_permit_decisions_show', methods: ['GET'])]
    public function show(PermitDecisions $permitDecision): Response
    {
        return $this->render('permit_decisions/show.html.twig', [
            'permit_decision' => $permitDecision,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_permit_decisions_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, PermitDecisions $permitDecision, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(PermitDecisionsType::class, $permitDecision);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_permit_decisions_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('permit_decisions/edit.html.twig', [
            'permit_decision' => $permitDecision,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_permit_decisions_delete', methods: ['POST'])]
    public function delete(Request $request, PermitDecisions $permitDecision, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$permitDecision->getId(), $request->request->get('_token'))) {
            $entityManager->remove($permitDecision);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_permit_decisions_index', [], Response::HTTP_SEE_OTHER);
    }
}
