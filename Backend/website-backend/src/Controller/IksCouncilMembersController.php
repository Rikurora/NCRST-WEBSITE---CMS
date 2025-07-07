<?php

namespace App\Controller;

use App\Entity\IksCouncilMember;
use App\Form\IksCouncilMemberType;
use App\Repository\IksCouncilMemberRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;

/**
 * @Route("/iks/council/members")
 */
class IksCouncilMembersController extends AbstractController
{
    /**
     * @Route("/", name="app_iks_council_members_index", methods={"GET"})
     */
    public function index(IksCouncilMemberRepository $iksCouncilMemberRepository): Response
    {
        return $this->render('iks_council_members/index.html.twig', [
            'iks_council_members' => $iksCouncilMemberRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="app_iks_council_members_new", methods={"GET", "POST"})
     */
    public function new(Request $request, IksCouncilMemberRepository $iksCouncilMemberRepository): Response
    {
        $iksCouncilMember = new IksCouncilMember();
        $form = $this->createForm(IksCouncilMemberType::class, $iksCouncilMember);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $iksCouncilMemberRepository->save($iksCouncilMember, true);

            return $this->redirectToRoute('app_iks_council_members_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('iks_council_members/new.html.twig', [
            'iks_council_member' => $iksCouncilMember,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_iks_council_members_show", methods={"GET"})
     */
    public function show(IksCouncilMember $iksCouncilMember): Response
    {
        return $this->render('iks_council_members/show.html.twig', [
            'iks_council_member' => $iksCouncilMember,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="app_iks_council_members_edit", methods={"GET", "POST"})
     */
    public function edit(Request $request, IksCouncilMember $iksCouncilMember, IksCouncilMemberRepository $iksCouncilMemberRepository): Response
    {
        $form = $this->createForm(IksCouncilMemberType::class, $iksCouncilMember);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $iksCouncilMemberRepository->save($iksCouncilMember, true);

            return $this->redirectToRoute('app_iks_council_members_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('iks_council_members/edit.html.twig', [
            'iks_council_member' => $iksCouncilMember,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_iks_council_members_delete", methods={"POST"})
     */
    public function delete(Request $request, IksCouncilMember $iksCouncilMember, IksCouncilMemberRepository $iksCouncilMemberRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$iksCouncilMember->getId(), $request->request->get('_token'))) {
            $iksCouncilMemberRepository->remove($iksCouncilMember, true);
        }

        return $this->redirectToRoute('app_iks_council_members_index', [], Response::HTTP_SEE_OTHER);
    }
}
