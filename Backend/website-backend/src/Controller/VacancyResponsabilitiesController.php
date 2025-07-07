<?php

namespace App\Controller;

use App\Entity\VacancyResponsibility;
use App\Form\VacancyResponsibilityType;
use App\Repository\VacancyResponsibilityRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/vacancy-responsibilities")
 */
class VacancyResponsibilityController extends AbstractController
{
    /**
     * @Route("/", name="app_vacancy_responsibility_index", methods={"GET"})
     */
    public function index(VacancyResponsibilityRepository $vacancyResponsibilityRepository): Response
    {
        return $this->render('vacancy_responsabilities/index.html.twig', [
            'vacancy_responsibilities' => $vacancyResponsibilityRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="app_vacancy_responsibility_new", methods={"GET", "POST"})
     */
    public function new(Request $request, VacancyResponsibilityRepository $vacancyResponsibilityRepository): Response
    {
        $vacancyResponsibility = new VacancyResponsibility();
        $form = $this->createForm(VacancyResponsibilityType::class, $vacancyResponsibility);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $vacancyResponsibilityRepository->save($vacancyResponsibility, true);

            return $this->redirectToRoute('app_vacancy_responsibility_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('vacancy_responsabilities/new.html.twig', [
            'vacancy_responsibility' => $vacancyResponsibility,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_vacancy_responsibility_show", methods={"GET"})
     */
    public function show(VacancyResponsibility $vacancyResponsibility): Response
    {
        return $this->render('vacancy_responsabilities/show.html.twig', [
            'vacancy_responsibility' => $vacancyResponsibility,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="app_vacancy_responsibility_edit", methods={"GET", "POST"})
     */
    public function edit(Request $request, VacancyResponsibility $vacancyResponsibility, VacancyResponsibilityRepository $vacancyResponsibilityRepository): Response
    {
        $form = $this->createForm(VacancyResponsibilityType::class, $vacancyResponsibility);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $vacancyResponsibilityRepository->save($vacancyResponsibility, true);

            return $this->redirectToRoute('app_vacancy_responsibility_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('vacancy_responsabilities/edit.html.twig', [
            'vacancy_responsibility' => $vacancyResponsibility,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_vacancy_responsibility_delete", methods={"POST"})
     */
    public function delete(Request $request, VacancyResponsibility $vacancyResponsibility, VacancyResponsibilityRepository $vacancyResponsibilityRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$vacancyResponsibility->getId(), $request->request->get('_token'))) {
            $vacancyResponsibilityRepository->remove($vacancyResponsibility, true);
        }

        return $this->redirectToRoute('app_vacancy_responsibility_index', [], Response::HTTP_SEE_OTHER);
    }
}
