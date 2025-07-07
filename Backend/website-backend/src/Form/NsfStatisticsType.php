<?php

namespace App\Form;

use App\Entity\NsfStatistics;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class NsfStatisticsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('category')
            ->add('metric_name')
            ->add('value')
            ->add('description')
            ->add('year')
            ->add('chart_type')
            ->add('chart_data')
            ->add('created_at')
            ->add('is_active')
            ->add('display_order')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => NsfStatistics::class,
        ]);
    }
}
