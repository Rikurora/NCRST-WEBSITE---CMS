<?php

namespace App\Controller;

use App\Entity\IksResource;
use App\Form\IksResourceType;
use App\Repository\IksResourceRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Doctrine\ORM\EntityManagerInterface;

#[Route('/iks/resources')]
class IksResourcesController extends AbstractController
{
    #[Route('/', name: 'app_iks_resources_index', methods: ['GET'])]
    public function index(IksResourceRepository $iksResourceRepository): Response
    {
        return $this->render('iks_resources/index.html.twig', [
            'iks_resources' => $iksResourceRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_iks_resources_new', methods: ['GET', 'POST'])]
    public function new(Request $request, IksResourceRepository $iksResourceRepository): Response
    {
        $iksResource = new IksResource();
        $form = $this->createForm(IksResourceType::class, $iksResource);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $iksResourceRepository->add($iksResource, true);

            return $this->redirectToRoute('app_iks_resources_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('iks_resources/new.html.twig', [
            'iks_resource' => $iksResource,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_iks_resources_show', methods: ['GET'])]
    public function show(IksResource $iksResource): Response
    {
        return $this->render('iks_resources/show.html.twig', [
            'iks_resource' => $iksResource,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_iks_resources_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, IksResource $iksResource, IksResourceRepository $iksResourceRepository): Response
    {
        $form = $this->createForm(IksResourceType::class, $iksResource);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $iksResourceRepository->add($iksResource, true);

            return $this->redirectToRoute('app_iks_resources_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('iks_resources/edit.html.twig', [
            'iks_resource' => $iksResource,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_iks_resources_delete', methods: ['POST'])]
    public function delete(Request $request, IksResource $iksResource, IksResourceRepository $iksResourceRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$iksResource->getId(), $request->request->get('_token'))) {
            $iksResourceRepository->remove($iksResource, true);
        }

        return $this->redirectToRoute('app_iks_resources_index', [], Response::HTTP_SEE_OTHER);
    }
}
