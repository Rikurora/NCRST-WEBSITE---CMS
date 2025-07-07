<?php

namespace App\Entity;

use App\Repository\BiotechLabRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: BiotechLabRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['biotech-lab:read']],
    denormalizationContext: ['groups' => ['biotech-lab:write']]
)]
class BiotechLab
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['biotech-lab:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['biotech-lab:read', 'biotech-lab:write'])]
    private ?string $name = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['biotech-lab:read', 'biotech-lab:write'])]
    private ?string $description = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['biotech-lab:read', 'biotech-lab:write'])]
    private ?string $image = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['biotech-lab:read', 'biotech-lab:write'])]
    private ?string $location = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['biotech-lab:read', 'biotech-lab:write'])]
    private ?string $equipment = null;

    #[ORM\Column(length: 50, nullable: true)]
    #[Groups(['biotech-lab:read', 'biotech-lab:write'])]
    private ?string $status = null;

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

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;
        return $this;
    }

    public function getLocation(): ?string
    {
        return $this->location;
    }

    public function setLocation(?string $location): self
    {
        $this->location = $location;
        return $this;
    }

    public function getEquipment(): ?string
    {
        return $this->equipment;
    }

    public function setEquipment(?string $equipment): self
    {
        $this->equipment = $equipment;
        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(?string $status): self
    {
        $this->status = $status;
        return $this;
    }
}