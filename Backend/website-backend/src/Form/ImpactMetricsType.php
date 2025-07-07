<?php

namespace App\Form;

use App\Entity\ImpactMetrics;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ImpactMetricsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title')
            ->add('value')
            ->add('description')
            ->add('icon')
            ->add('created_at')
            ->add('is_active')
            ->add('display_order')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ImpactMetrics::class,
        ]);
    }
}
