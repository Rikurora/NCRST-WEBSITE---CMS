<?php

namespace App\Entity;

use App\Repository\InternshipBenefitRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: InternshipBenefitRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['internship-benefit:read']],
    denormalizationContext: ['groups' => ['internship-benefit:write']]
)]
class InternshipBenefit
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['internship-benefit:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['internship-benefit:read', 'internship-benefit:write'])]
    private ?string $title = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['internship-benefit:read', 'internship-benefit:write'])]
    private ?string $description = null;

    #[ORM\ManyToOne(targetEntity: InternshipProgram::class)]
    #[Groups(['internship-benefit:read', 'internship-benefit:write'])]
    private ?InternshipProgram $program = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;
        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;
        return $this;
    }

    public function getProgram(): ?InternshipProgram
    {
        return $this->program;
    }

    public function setProgram(?InternshipProgram $program): self
    {
        $this->program = $program;
        return $this;
    }
} 