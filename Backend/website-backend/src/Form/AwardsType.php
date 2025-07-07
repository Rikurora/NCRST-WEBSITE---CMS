<?php

namespace App\Form;

use App\Entity\Awards;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AwardsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title')
            ->add('recipient')
            ->add('description')
            ->add('award_category')
            ->add('award_date')
            ->add('image_url')
            ->add('achievement_details')
            ->add('created_at')
            ->add('is_active')
            ->add('display_order')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Awards::class,
        ]);
    }
}
