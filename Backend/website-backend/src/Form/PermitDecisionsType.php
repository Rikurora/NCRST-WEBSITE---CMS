<?php

namespace App\Form;

use App\Entity\PermitDecisions;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PermitDecisionsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('permit_number')
            ->add('applicant_name')
            ->add('permit_type')
            ->add('project_title')
            ->add('project_description')
            ->add('decision_status')
            ->add('decision_date')
            ->add('valid_from')
            ->add('valid_until')
            ->add('decision_details')
            ->add('conditions')
            ->add('documents')
            ->add('created_at')
            ->add('is_active')
            ->add('display_order')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => PermitDecisions::class,
        ]);
    }
}
