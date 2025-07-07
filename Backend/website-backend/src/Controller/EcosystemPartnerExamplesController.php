<?php

namespace App\Controller;

use App\Entity\EcosystemPartnerExample;
use App\Form\EcosystemPartnerExampleType;
use App\Repository\EcosystemPartnerExampleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/ecosystem/partner/examples')]
class EcosystemPartnerExamplesController extends AbstractController
{
    #[Route('/', name: 'app_ecosystem_partner_examples_index', methods: ['GET'])]
    public function index(EcosystemPartnerExampleRepository $ecosystemPartnerExampleRepository): Response
    {
        return $this->render('ecosystem_partner_examples/index.html.twig', [
            'ecosystem_partner_examples' => $ecosystemPartnerExampleRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_ecosystem_partner_examples_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EcosystemPartnerExampleRepository $ecosystemPartnerExampleRepository): Response
    {
        $ecosystemPartnerExample = new EcosystemPartnerExample();
        $form = $this->createForm(EcosystemPartnerExampleType::class, $ecosystemPartnerExample);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $ecosystemPartnerExampleRepository->add($ecosystemPartnerExample, true);

            return $this->redirectToRoute('app_ecosystem_partner_examples_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('ecosystem_partner_examples/new.html.twig', [
            'ecosystem_partner_example' => $ecosystemPartnerExample,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_ecosystem_partner_examples_show', methods: ['GET'])]
    public function show(EcosystemPartnerExample $ecosystemPartnerExample): Response
    {
        return $this->render('ecosystem_partner_examples/show.html.twig', [
            'ecosystem_partner_example' => $ecosystemPartnerExample,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_ecosystem_partner_examples_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, EcosystemPartnerExample $ecosystemPartnerExample, EcosystemPartnerExampleRepository $ecosystemPartnerExampleRepository): Response
    {
        $form = $this->createForm(EcosystemPartnerExampleType::class, $ecosystemPartnerExample);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $ecosystemPartnerExampleRepository->add($ecosystemPartnerExample, true);

            return $this->redirectToRoute('app_ecosystem_partner_examples_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('ecosystem_partner_examples/edit.html.twig', [
            'ecosystem_partner_example' => $ecosystemPartnerExample,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_ecosystem_partner_examples_delete', methods: ['POST'])]
    public function delete(Request $request, EcosystemPartnerExample $ecosystemPartnerExample, EcosystemPartnerExampleRepository $ecosystemPartnerExampleRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$ecosystemPartnerExample->getId(), $request->request->get('_token'))) {
            $ecosystemPartnerExampleRepository->remove($ecosystemPartnerExample, true);
        }

        return $this->redirectToRoute('app_ecosystem_partner_examples_index', [], Response::HTTP_SEE_OTHER);
    }
}
