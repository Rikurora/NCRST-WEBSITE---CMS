<?php

namespace App\Controller;

use App\Entity\NsfStatistics;
use App\Form\NsfStatisticsType;
use App\Repository\NsfStatisticsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/nsf/statistics')]
class NsfStatisticsController extends AbstractController
{
    #[Route('/', name: 'app_nsf_statistics_index', methods: ['GET'])]
    public function index(NsfStatisticsRepository $nsfStatisticsRepository): Response
    {
        return $this->render('nsf_statistics/index.html.twig', [
            'nsf_statistics' => $nsfStatisticsRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_nsf_statistics_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $nsfStatistic = new NsfStatistics();
        $form = $this->createForm(NsfStatisticsType::class, $nsfStatistic);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($nsfStatistic);
            $entityManager->flush();

            return $this->redirectToRoute('app_nsf_statistics_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('nsf_statistics/new.html.twig', [
            'nsf_statistic' => $nsfStatistic,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_nsf_statistics_show', methods: ['GET'])]
    public function show(NsfStatistics $nsfStatistic): Response
    {
        return $this->render('nsf_statistics/show.html.twig', [
            'nsf_statistic' => $nsfStatistic,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_nsf_statistics_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, NsfStatistics $nsfStatistic, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(NsfStatisticsType::class, $nsfStatistic);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_nsf_statistics_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('nsf_statistics/edit.html.twig', [
            'nsf_statistic' => $nsfStatistic,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_nsf_statistics_delete', methods: ['POST'])]
    public function delete(Request $request, NsfStatistics $nsfStatistic, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$nsfStatistic->getId(), $request->request->get('_token'))) {
            $entityManager->remove($nsfStatistic);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_nsf_statistics_index', [], Response::HTTP_SEE_OTHER);
    }
}
