<?php

namespace App\Form;

use App\Entity\ResearchInfrastructure;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ResearchInfrastructureType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name')
            ->add('description')
            ->add('category')
            ->add('location')
            ->add('specifications')
            ->add('usage_guidelines')
            ->add('contact_person')
            ->add('contact_email')
            ->add('images')
            ->add('documents')
            ->add('created_at')
            ->add('is_active')
            ->add('display_order')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ResearchInfrastructure::class,
        ]);
    }
}
