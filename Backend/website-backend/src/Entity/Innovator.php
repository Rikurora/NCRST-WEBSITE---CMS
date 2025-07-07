<?php

namespace App\Entity;

use App\Repository\InnovatorRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: InnovatorRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['innovator:read']],
    denormalizationContext: ['groups' => ['innovator:write']]
)]
class Innovator
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['innovator:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['innovator:read', 'innovator:write'])]
    private ?string $name = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['innovator:read', 'innovator:write'])]
    private ?string $bio = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['innovator:read', 'innovator:write'])]
    private ?string $image = null;

    #[ORM\Column(length: 100, nullable: true)]
    #[Groups(['innovator:read', 'innovator:write'])]
    private ?string $institution = null;

    #[ORM\Column(length: 100, nullable: true)]
    #[Groups(['innovator:read', 'innovator:write'])]
    private ?string $field = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['innovator:read', 'innovator:write'])]
    private ?string $achievements = null;

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

    public function getBio(): ?string
    {
        return $this->bio;
    }

    public function setBio(?string $bio): self
    {
        $this->bio = $bio;
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

    public function getInstitution(): ?string
    {
        return $this->institution;
    }

    public function setInstitution(?string $institution): self
    {
        $this->institution = $institution;
        return $this;
    }

    public function getField(): ?string
    {
        return $this->field;
    }

    public function setField(?string $field): self
    {
        $this->field = $field;
        return $this;
    }

    public function getAchievements(): ?string
    {
        return $this->achievements;
    }

    public function setAchievements(?string $achievements): self
    {
        $this->achievements = $achievements;
        return $this;
    }
} 