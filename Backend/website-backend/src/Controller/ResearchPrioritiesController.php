<?php

namespace App\Controller;

use App\Entity\ResearchPriority;
use App\Form\ResearchPriorityType;
use App\Repository\ResearchPriorityRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/admin/research-priorities')]
class ResearchPriorityController extends AbstractController
{
    #[Route('/', name: 'app_research_priority_index', methods: ['GET'])]
    public function index(ResearchPriorityRepository $researchPriorityRepository): Response
    {
        return $this->render('research_priorities/index.html.twig', [
            'research_priorities' => $researchPriorityRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_research_priority_new', methods: ['GET', 'POST'])]
    public function new(Request $request, ResearchPriorityRepository $researchPriorityRepository): Response
    {
        $researchPriority = new ResearchPriority();
        $form = $this->createForm(ResearchPriorityType::class, $researchPriority);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $researchPriorityRepository->save($researchPriority, true);

            return $this->redirectToRoute('app_research_priority_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('research_priorities/new.html.twig', [
            'research_priority' => $researchPriority,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_research_priority_show', methods: ['GET'])]
    public function show(ResearchPriority $researchPriority): Response
    {
        return $this->render('research_priorities/show.html.twig', [
            'research_priority' => $researchPriority,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_research_priority_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, ResearchPriority $researchPriority, ResearchPriorityRepository $researchPriorityRepository): Response
    {
        $form = $this->createForm(ResearchPriorityType::class, $researchPriority);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $researchPriorityRepository->save($researchPriority, true);

            return $this->redirectToRoute('app_research_priority_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('research_priorities/edit.html.twig', [
            'research_priority' => $researchPriority,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_research_priority_delete', methods: ['POST'])]
    public function delete(Request $request, ResearchPriority $researchPriority, ResearchPriorityRepository $researchPriorityRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$researchPriority->getId(), $request->request->get('_token'))) {
            $researchPriorityRepository->remove($researchPriority, true);
        }

        return $this->redirectToRoute('app_research_priority_index', [], Response::HTTP_SEE_OTHER);
    }
}
