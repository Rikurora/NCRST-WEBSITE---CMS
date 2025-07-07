<?php

namespace App\Form;

use App\Entity\VacancyResponsibility;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class VacancyResponsibilityType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('responsibility')
            ->add('priority')
            ->add('vacancy')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => VacancyResponsibility::class,
        ]);
    }
} 