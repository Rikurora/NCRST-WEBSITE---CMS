<?php

namespace App\Controller;

use App\Entity\IksInitiative;
use App\Form\IksInitiativeType;
use App\Repository\IksInitiativeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/iks/initiatives")
 */
class IksIniativesController extends AbstractController
{
    /**
     * @Route("/", name="app_iks_initiatives_index", methods={"GET"})
     */
    public function index(IksInitiativeRepository $iksInitiativeRepository): Response
    {
        return $this->render('iks_iniatives/index.html.twig', [
            'iks_initiatives' => $iksInitiativeRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="app_iks_initiatives_new", methods={"GET", "POST"})
     */
    public function new(Request $request, IksInitiativeRepository $iksInitiativeRepository): Response
    {
        $iksInitiative = new IksInitiative();
        $form = $this->createForm(IksInitiativeType::class, $iksInitiative);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $iksInitiativeRepository->save($iksInitiative, true);

            return $this->redirectToRoute('app_iks_initiatives_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('iks_iniatives/new.html.twig', [
            'iks_initiative' => $iksInitiative,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_iks_initiatives_show", methods={"GET"})
     */
    public function show(IksInitiative $iksInitiative): Response
    {
        return $this->render('iks_iniatives/show.html.twig', [
            'iks_initiative' => $iksInitiative,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="app_iks_initiatives_edit", methods={"GET", "POST"})
     */
    public function edit(Request $request, IksInitiative $iksInitiative, IksInitiativeRepository $iksInitiativeRepository): Response
    {
        $form = $this->createForm(IksInitiativeType::class, $iksInitiative);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $iksInitiativeRepository->save($iksInitiative, true);

            return $this->redirectToRoute('app_iks_initiatives_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('iks_iniatives/edit.html.twig', [
            'iks_initiative' => $iksInitiative,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_iks_initiatives_delete", methods={"POST"})
     */
    public function delete(Request $request, IksInitiative $iksInitiative, IksInitiativeRepository $iksInitiativeRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$iksInitiative->getId(), $request->request->get('_token'))) {
            $iksInitiativeRepository->remove($iksInitiative, true);
        }

        return $this->redirectToRoute('app_iks_initiatives_index', [], Response::HTTP_SEE_OTHER);
    }
}
