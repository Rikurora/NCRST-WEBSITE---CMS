<?php

namespace App\Controller;

use App\Entity\IksInitiativeOutcome;
use App\Form\IksInitiativeOutcomeType;
use App\Repository\IksInitiativeOutcomeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/iks/initiative/outcomes")
 */
class IksIniativeOutcomesController extends AbstractController
{
    /**
     * @Route("/", name="app_iks_initiative_outcomes_index", methods={"GET"})
     */
    public function index(IksInitiativeOutcomeRepository $iksInitiativeOutcomeRepository): Response
    {
        return $this->render('iks_iniative_outcomes/index.html.twig', [
            'iks_initiative_outcomes' => $iksInitiativeOutcomeRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="app_iks_initiative_outcomes_new", methods={"GET", "POST"})
     */
    public function new(Request $request, IksInitiativeOutcomeRepository $iksInitiativeOutcomeRepository): Response
    {
        $iksInitiativeOutcome = new IksInitiativeOutcome();
        $form = $this->createForm(IksInitiativeOutcomeType::class, $iksInitiativeOutcome);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $iksInitiativeOutcomeRepository->save($iksInitiativeOutcome, true);

            return $this->redirectToRoute('app_iks_initiative_outcomes_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('iks_iniative_outcomes/new.html.twig', [
            'iks_initiative_outcome' => $iksInitiativeOutcome,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_iks_initiative_outcomes_show", methods={"GET"})
     */
    public function show(IksInitiativeOutcome $iksInitiativeOutcome): Response
    {
        return $this->render('iks_iniative_outcomes/show.html.twig', [
            'iks_initiative_outcome' => $iksInitiativeOutcome,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="app_iks_initiative_outcomes_edit", methods={"GET", "POST"})
     */
    public function edit(Request $request, IksInitiativeOutcome $iksInitiativeOutcome, IksInitiativeOutcomeRepository $iksInitiativeOutcomeRepository): Response
    {
        $form = $this->createForm(IksInitiativeOutcomeType::class, $iksInitiativeOutcome);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $iksInitiativeOutcomeRepository->save($iksInitiativeOutcome, true);

            return $this->redirectToRoute('app_iks_initiative_outcomes_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('iks_iniative_outcomes/edit.html.twig', [
            'iks_initiative_outcome' => $iksInitiativeOutcome,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_iks_initiative_outcomes_delete", methods={"POST"})
     */
    public function delete(Request $request, IksInitiativeOutcome $iksInitiativeOutcome, IksInitiativeOutcomeRepository $iksInitiativeOutcomeRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$iksInitiativeOutcome->getId(), $request->request->get('_token'))) {
            $iksInitiativeOutcomeRepository->remove($iksInitiativeOutcome, true);
        }

        return $this->redirectToRoute('app_iks_initiative_outcomes_index', [], Response::HTTP_SEE_OTHER);
    }
}
