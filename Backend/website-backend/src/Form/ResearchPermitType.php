<?php

namespace App\Form;

use App\Entity\ResearchPermit;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ResearchPermitType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title')
            ->add('description')
            ->add('applicant')
            ->add('status')
            ->add('submissionDate')
            ->add('approvalDate')
            ->add('expiryDate')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ResearchPermit::class,
        ]);
    }
} 