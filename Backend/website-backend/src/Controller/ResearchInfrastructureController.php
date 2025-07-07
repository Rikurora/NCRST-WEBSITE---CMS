<?php

namespace App\Controller;

use App\Entity\ResearchInfrastructure;
use App\Form\ResearchInfrastructureType;
use App\Repository\ResearchInfrastructureRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/research/infrastructure')]
class ResearchInfrastructureController extends AbstractController
{
    #[Route('/', name: 'app_research_infrastructure_index', methods: ['GET'])]
    public function index(ResearchInfrastructureRepository $researchInfrastructureRepository): Response
    {
        return $this->render('research_infrastructure/index.html.twig', [
            'research_infrastructures' => $researchInfrastructureRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_research_infrastructure_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $researchInfrastructure = new ResearchInfrastructure();
        $form = $this->createForm(ResearchInfrastructureType::class, $researchInfrastructure);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($researchInfrastructure);
            $entityManager->flush();

            return $this->redirectToRoute('app_research_infrastructure_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('research_infrastructure/new.html.twig', [
            'research_infrastructure' => $researchInfrastructure,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_research_infrastructure_show', methods: ['GET'])]
    public function show(ResearchInfrastructure $researchInfrastructure): Response
    {
        return $this->render('research_infrastructure/show.html.twig', [
            'research_infrastructure' => $researchInfrastructure,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_research_infrastructure_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, ResearchInfrastructure $researchInfrastructure, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(ResearchInfrastructureType::class, $researchInfrastructure);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_research_infrastructure_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('research_infrastructure/edit.html.twig', [
            'research_infrastructure' => $researchInfrastructure,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_research_infrastructure_delete', methods: ['POST'])]
    public function delete(Request $request, ResearchInfrastructure $researchInfrastructure, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$researchInfrastructure->getId(), $request->request->get('_token'))) {
            $entityManager->remove($researchInfrastructure);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_research_infrastructure_index', [], Response::HTTP_SEE_OTHER);
    }
}
