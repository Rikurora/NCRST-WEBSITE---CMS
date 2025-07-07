<?php

namespace App\Controller;

use App\Entity\Innovator;
use App\Form\InnovatorType;
use App\Repository\InnovatorRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/innovators')]
class InnovatorsController extends AbstractController
{
    #[Route('/', name: 'app_innovators_index', methods: ['GET'])]
    public function index(InnovatorRepository $innovatorRepository): Response
    {
        return $this->render('innovators/index.html.twig', [
            'innovators' => $innovatorRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_innovators_new', methods: ['GET', 'POST'])]
    public function new(Request $request, InnovatorRepository $innovatorRepository): Response
    {
        $innovator = new Innovator();
        $form = $this->createForm(InnovatorType::class, $innovator);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $innovatorRepository->add($innovator, true);

            return $this->redirectToRoute('app_innovators_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('innovators/new.html.twig', [
            'innovator' => $innovator,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_innovators_show', methods: ['GET'])]
    public function show(Innovator $innovator): Response
    {
        return $this->render('innovators/show.html.twig', [
            'innovator' => $innovator,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_innovators_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Innovator $innovator, InnovatorRepository $innovatorRepository): Response
    {
        $form = $this->createForm(InnovatorType::class, $innovator);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $innovatorRepository->add($innovator, true);

            return $this->redirectToRoute('app_innovators_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('innovators/edit.html.twig', [
            'innovator' => $innovator,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_innovators_delete', methods: ['POST'])]
    public function delete(Request $request, Innovator $innovator, InnovatorRepository $innovatorRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$innovator->getId(), $request->request->get('_token'))) {
            $innovatorRepository->remove($innovator, true);
        }

        return $this->redirectToRoute('app_innovators_index', [], Response::HTTP_SEE_OTHER);
    }
}
