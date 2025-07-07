<?php

namespace App\Controller;

use App\Entity\ScienceProgram;
use App\Form\ScienceProgramType;
use App\Repository\ScienceProgramRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/admin/science-programs')]
class ScienceProgramController extends AbstractController
{
    #[Route('/', name: 'app_science_program_index', methods: ['GET'])]
    public function index(ScienceProgramRepository $scienceProgramRepository): Response
    {
        return $this->render('science_programs/index.html.twig', [
            'science_programs' => $scienceProgramRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_science_program_new', methods: ['GET', 'POST'])]
    public function new(Request $request, ScienceProgramRepository $scienceProgramRepository): Response
    {
        $scienceProgram = new ScienceProgram();
        $form = $this->createForm(ScienceProgramType::class, $scienceProgram);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $scienceProgramRepository->save($scienceProgram, true);

            return $this->redirectToRoute('app_science_program_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('science_programs/new.html.twig', [
            'science_program' => $scienceProgram,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_science_program_show', methods: ['GET'])]
    public function show(ScienceProgram $scienceProgram): Response
    {
        return $this->render('science_programs/show.html.twig', [
            'science_program' => $scienceProgram,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_science_program_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, ScienceProgram $scienceProgram, ScienceProgramRepository $scienceProgramRepository): Response
    {
        $form = $this->createForm(ScienceProgramType::class, $scienceProgram);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $scienceProgramRepository->save($scienceProgram, true);

            return $this->redirectToRoute('app_science_program_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('science_programs/edit.html.twig', [
            'science_program' => $scienceProgram,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_science_program_delete', methods: ['POST'])]
    public function delete(Request $request, ScienceProgram $scienceProgram, ScienceProgramRepository $scienceProgramRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$scienceProgram->getId(), $request->request->get('_token'))) {
            $scienceProgramRepository->remove($scienceProgram, true);
        }

        return $this->redirectToRoute('app_science_program_index', [], Response::HTTP_SEE_OTHER);
    }
}
