<?php

namespace App\Controller;

use App\Entity\ImpactMetrics;
use App\Form\ImpactMetricsType;
use App\Repository\ImpactMetricsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/impact/metrics')]
class ImpactMetricsController extends AbstractController
{
    #[Route('/', name: 'app_impact_metrics_index', methods: ['GET'])]
    public function index(ImpactMetricsRepository $impactMetricsRepository): Response
    {
        return $this->render('impact_metrics/index.html.twig', [
            'impact_metrics' => $impactMetricsRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_impact_metrics_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $impactMetric = new ImpactMetrics();
        $form = $this->createForm(ImpactMetricsType::class, $impactMetric);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($impactMetric);
            $entityManager->flush();

            return $this->redirectToRoute('app_impact_metrics_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('impact_metrics/new.html.twig', [
            'impact_metric' => $impactMetric,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_impact_metrics_show', methods: ['GET'])]
    public function show(ImpactMetrics $impactMetric): Response
    {
        return $this->render('impact_metrics/show.html.twig', [
            'impact_metric' => $impactMetric,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_impact_metrics_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, ImpactMetrics $impactMetric, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(ImpactMetricsType::class, $impactMetric);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_impact_metrics_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('impact_metrics/edit.html.twig', [
            'impact_metric' => $impactMetric,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_impact_metrics_delete', methods: ['POST'])]
    public function delete(Request $request, ImpactMetrics $impactMetric, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$impactMetric->getId(), $request->request->get('_token'))) {
            $entityManager->remove($impactMetric);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_impact_metrics_index', [], Response::HTTP_SEE_OTHER);
    }
}
