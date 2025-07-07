<?php

namespace App\Controller;

use App\Entity\NewsCategory;
use App\Form\NewsCategoryType;
use App\Repository\NewsCategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/admin/news-categories')]
class NewsCategoryController extends AbstractController
{
    #[Route('/', name: 'app_news_category_index', methods: ['GET'])]
    public function index(NewsCategoryRepository $newsCategoryRepository): Response
    {
        return $this->render('news_categories/index.html.twig', [
            'news_categories' => $newsCategoryRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_news_category_new', methods: ['GET', 'POST'])]
    public function new(Request $request, NewsCategoryRepository $newsCategoryRepository): Response
    {
        $newsCategory = new NewsCategory();
        $form = $this->createForm(NewsCategoryType::class, $newsCategory);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $newsCategoryRepository->save($newsCategory, true);

            return $this->redirectToRoute('app_news_category_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('news_categories/new.html.twig', [
            'news_category' => $newsCategory,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_news_category_show', methods: ['GET'])]
    public function show(NewsCategory $newsCategory): Response
    {
        return $this->render('news_categories/show.html.twig', [
            'news_category' => $newsCategory,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_news_category_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, NewsCategory $newsCategory, NewsCategoryRepository $newsCategoryRepository): Response
    {
        $form = $this->createForm(NewsCategoryType::class, $newsCategory);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $newsCategoryRepository->save($newsCategory, true);

            return $this->redirectToRoute('app_news_category_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('news_categories/edit.html.twig', [
            'news_category' => $newsCategory,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_news_category_delete', methods: ['POST'])]
    public function delete(Request $request, NewsCategory $newsCategory, NewsCategoryRepository $newsCategoryRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$newsCategory->getId(), $request->request->get('_token'))) {
            $newsCategoryRepository->remove($newsCategory, true);
        }

        return $this->redirectToRoute('app_news_category_index', [], Response::HTTP_SEE_OTHER);
    }
}
