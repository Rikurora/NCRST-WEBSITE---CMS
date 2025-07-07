<?php

namespace App\Form;

use App\Entity\ProcurementDocument;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProcurementDocumentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title')
            ->add('description')
            ->add('documentType')
            ->add('file')
            ->add('uploadDate')
            ->add('status')
            ->add('procurementBid')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ProcurementDocument::class,
        ]);
    }
} 