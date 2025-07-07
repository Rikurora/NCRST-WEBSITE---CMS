<?php

namespace App\Form;

use App\Entity\InfrastructureUtilization;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class InfrastructureUtilizationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('infrastructure_name')
            ->add('metric_name')
            ->add('value')
            ->add('description')
            ->add('year')
            ->add('created_at')
            ->add('is_active')
            ->add('display_order')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => InfrastructureUtilization::class,
        ]);
    }
}
