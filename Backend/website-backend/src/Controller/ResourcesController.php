<?php

namespace App\Controller;

use App\Entity\Resource;
use App\Form\ResourceType;
use App\Repository\ResourceRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/resources')]
class ResourcesController extends AbstractController
{
    #[Route('/', name: 'app_resources_index', methods: ['GET'])]
    public function index(ResourceRepository $resourceRepository): Response
    {
        return $this->render('resources/index.html.twig', [
            'resources' => $resourceRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_resources_new', methods: ['GET', 'POST'])]
    public function new(Request $request, ResourceRepository $resourceRepository): Response
    {
        $resource = new Resource();
        $form = $this->createForm(ResourceType::class, $resource);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $resourceRepository->add($resource, true);

            return $this->redirectToRoute('app_resources_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('resources/new.html.twig', [
            'resource' => $resource,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_resources_show', methods: ['GET'])]
    public function show(Resource $resource): Response
    {
        return $this->render('resources/show.html.twig', [
            'resource' => $resource,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_resources_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Resource $resource, ResourceRepository $resourceRepository): Response
    {
        $form = $this->createForm(ResourceType::class, $resource);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $resourceRepository->add($resource, true);

            return $this->redirectToRoute('app_resources_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('resources/edit.html.twig', [
            'resource' => $resource,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_resources_delete', methods: ['POST'])]
    public function delete(Request $request, Resource $resource, ResourceRepository $resourceRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$resource->getId(), $request->request->get('_token'))) {
            $resourceRepository->remove($resource, true);
        }

        return $this->redirectToRoute('app_resources_index', [], Response::HTTP_SEE_OTHER);
    }
}
