<?php

namespace App\Form;

use App\Entity\AiInitiative;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AiInitiativeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title')
            ->add('description')
            ->add('image')
            ->add('createdAt')
            ->add('status')
            ->add('startDate')
            ->add('outcomes')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => AiInitiative::class,
        ]);
    }
}
