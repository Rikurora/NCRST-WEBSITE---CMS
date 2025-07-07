<?php

namespace App\Controller;

use App\Entity\VacancyRequirement;
use App\Form\VacancyRequirementType;
use App\Repository\VacancyRequirementRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/vacancy-requirements")
 */
class VacancyRequirementController extends AbstractController
{
    /**
     * @Route("/", name="app_vacancy_requirement_index", methods={"GET"})
     */
    public function index(VacancyRequirementRepository $vacancyRequirementRepository): Response
    {
        return $this->render('vacancy_requirements/index.html.twig', [
            'vacancy_requirements' => $vacancyRequirementRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="app_vacancy_requirement_new", methods={"GET", "POST"})
     */
    public function new(Request $request, VacancyRequirementRepository $vacancyRequirementRepository): Response
    {
        $vacancyRequirement = new VacancyRequirement();
        $form = $this->createForm(VacancyRequirementType::class, $vacancyRequirement);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $vacancyRequirementRepository->save($vacancyRequirement, true);

            return $this->redirectToRoute('app_vacancy_requirement_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('vacancy_requirements/new.html.twig', [
            'vacancy_requirement' => $vacancyRequirement,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_vacancy_requirement_show", methods={"GET"})
     */
    public function show(VacancyRequirement $vacancyRequirement): Response
    {
        return $this->render('vacancy_requirements/show.html.twig', [
            'vacancy_requirement' => $vacancyRequirement,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="app_vacancy_requirement_edit", methods={"GET", "POST"})
     */
    public function edit(Request $request, VacancyRequirement $vacancyRequirement, VacancyRequirementRepository $vacancyRequirementRepository): Response
    {
        $form = $this->createForm(VacancyRequirementType::class, $vacancyRequirement);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $vacancyRequirementRepository->save($vacancyRequirement, true);

            return $this->redirectToRoute('app_vacancy_requirement_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('vacancy_requirements/edit.html.twig', [
            'vacancy_requirement' => $vacancyRequirement,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_vacancy_requirement_delete", methods={"POST"})
     */
    public function delete(Request $request, VacancyRequirement $vacancyRequirement, VacancyRequirementRepository $vacancyRequirementRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$vacancyRequirement->getId(), $request->request->get('_token'))) {
            $vacancyRequirementRepository->remove($vacancyRequirement, true);
        }

        return $this->redirectToRoute('app_vacancy_requirement_index', [], Response::HTTP_SEE_OTHER);
    }
}
