<?php

namespace App\Controller;

use App\Entity\InfrastructureUtilization;
use App\Form\InfrastructureUtilizationType;
use App\Repository\InfrastructureUtilizationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/infrastructure/utilization')]
class InfrastructureUtilizationController extends AbstractController
{
    #[Route('/', name: 'app_infrastructure_utilization_index', methods: ['GET'])]
    public function index(InfrastructureUtilizationRepository $infrastructureUtilizationRepository): Response
    {
        return $this->render('infrastructure_utilization/index.html.twig', [
            'infrastructure_utilizations' => $infrastructureUtilizationRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_infrastructure_utilization_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $infrastructureUtilization = new InfrastructureUtilization();
        $form = $this->createForm(InfrastructureUtilizationType::class, $infrastructureUtilization);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($infrastructureUtilization);
            $entityManager->flush();

            return $this->redirectToRoute('app_infrastructure_utilization_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('infrastructure_utilization/new.html.twig', [
            'infrastructure_utilization' => $infrastructureUtilization,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_infrastructure_utilization_show', methods: ['GET'])]
    public function show(InfrastructureUtilization $infrastructureUtilization): Response
    {
        return $this->render('infrastructure_utilization/show.html.twig', [
            'infrastructure_utilization' => $infrastructureUtilization,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_infrastructure_utilization_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, InfrastructureUtilization $infrastructureUtilization, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(InfrastructureUtilizationType::class, $infrastructureUtilization);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_infrastructure_utilization_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('infrastructure_utilization/edit.html.twig', [
            'infrastructure_utilization' => $infrastructureUtilization,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_infrastructure_utilization_delete', methods: ['POST'])]
    public function delete(Request $request, InfrastructureUtilization $infrastructureUtilization, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$infrastructureUtilization->getId(), $request->request->get('_token'))) {
            $entityManager->remove($infrastructureUtilization);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_infrastructure_utilization_index', [], Response::HTTP_SEE_OTHER);
    }
}
