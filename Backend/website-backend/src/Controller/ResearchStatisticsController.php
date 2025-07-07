<?php

namespace App\Controller;

use App\Entity\ResearchStatistics;
use App\Form\ResearchStatisticsType;
use App\Repository\ResearchStatisticsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/research/statistics')]
class ResearchStatisticsController extends AbstractController
{
    #[Route('/', name: 'app_research_statistics_index', methods: ['GET'])]
    public function index(ResearchStatisticsRepository $researchStatisticsRepository): Response
    {
        return $this->render('research_statistics/index.html.twig', [
            'research_statistics' => $researchStatisticsRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_research_statistics_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $researchStatistic = new ResearchStatistics();
        $form = $this->createForm(ResearchStatisticsType::class, $researchStatistic);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($researchStatistic);
            $entityManager->flush();

            return $this->redirectToRoute('app_research_statistics_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('research_statistics/new.html.twig', [
            'research_statistic' => $researchStatistic,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_research_statistics_show', methods: ['GET'])]
    public function show(ResearchStatistics $researchStatistic): Response
    {
        return $this->render('research_statistics/show.html.twig', [
            'research_statistic' => $researchStatistic,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_research_statistics_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, ResearchStatistics $researchStatistic, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(ResearchStatisticsType::class, $researchStatistic);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_research_statistics_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('research_statistics/edit.html.twig', [
            'research_statistic' => $researchStatistic,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_research_statistics_delete', methods: ['POST'])]
    public function delete(Request $request, ResearchStatistics $researchStatistic, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$researchStatistic->getId(), $request->request->get('_token'))) {
            $entityManager->remove($researchStatistic);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_research_statistics_index', [], Response::HTTP_SEE_OTHER);
    }
}
