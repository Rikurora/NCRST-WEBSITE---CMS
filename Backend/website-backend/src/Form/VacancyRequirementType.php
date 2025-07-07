<?php

namespace App\Form;

use App\Entity\VacancyRequirement;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class VacancyRequirementType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('requirement')
            ->add('type')
            ->add('priority')
            ->add('vacancy')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => VacancyRequirement::class,
        ]);
    }
} 