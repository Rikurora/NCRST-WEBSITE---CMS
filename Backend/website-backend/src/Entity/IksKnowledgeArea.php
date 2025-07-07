<?php

namespace App\Entity;

use App\Repository\IksKnowledgeAreaRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: IksKnowledgeAreaRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['iks-knowledge-area:read']],
    denormalizationContext: ['groups' => ['iks-knowledge-area:write']]
)]
class IksKnowledgeArea
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['iks-knowledge-area:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['iks-knowledge-area:read', 'iks-knowledge-area:write'])]
    private ?string $name = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['iks-knowledge-area:read', 'iks-knowledge-area:write'])]
    private ?string $description = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['iks-knowledge-area:read', 'iks-knowledge-area:write'])]
    private ?string $image = null;

    #[ORM\Column(length: 50, nullable: true)]
    #[Groups(['iks-knowledge-area:read', 'iks-knowledge-area:write'])]
    private ?string $icon = null;

    #[ORM\Column(length: 50, nullable: true)]
    #[Groups(['iks-knowledge-area:read', 'iks-knowledge-area:write'])]
    private ?string $color = null;

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

    public function getIcon(): ?string
    {
        return $this->icon;
    }

    public function setIcon(?string $icon): self
    {
        $this->icon = $icon;
        return $this;
    }

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(?string $color): self
    {
        $this->color = $color;
        return $this;
    }
} 