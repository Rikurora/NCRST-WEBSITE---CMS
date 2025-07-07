<?php

namespace App\Entity;

use App\Repository\InternshipDepartmentRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: InternshipDepartmentRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['internship-department:read']],
    denormalizationContext: ['groups' => ['internship-department:write']]
)]
class InternshipDepartment
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['internship-department:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['internship-department:read', 'internship-department:write'])]
    private ?string $name = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['internship-department:read', 'internship-department:write'])]
    private ?string $description = null;

    #[ORM\ManyToOne(targetEntity: InternshipProgram::class)]
    #[Groups(['internship-department:read', 'internship-department:write'])]
    private ?InternshipProgram $program = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;
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