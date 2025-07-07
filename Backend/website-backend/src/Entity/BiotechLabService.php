<?php

namespace App\Entity;

use App\Repository\BiotechLabServiceRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: BiotechLabServiceRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['biotech-lab-service:read']],
    denormalizationContext: ['groups' => ['biotech-lab-service:write']]
)]
class BiotechLabService
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['biotech-lab-service:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['biotech-lab-service:read', 'biotech-lab-service:write'])]
    private ?string $name = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['biotech-lab-service:read', 'biotech-lab-service:write'])]
    private ?string $description = null;

    #[ORM\ManyToOne(targetEntity: BiotechLab::class)]
    #[Groups(['biotech-lab-service:read', 'biotech-lab-service:write'])]
    private ?BiotechLab $lab = null;

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

    public function getLab(): ?BiotechLab
    {
        return $this->lab;
    }

    public function setLab(?BiotechLab $lab): self
    {
        $this->lab = $lab;
        return $this;
    }
} 