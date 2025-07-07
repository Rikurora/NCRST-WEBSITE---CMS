<?php

namespace App\Entity;

use App\Repository\ScienceProgramRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ScienceProgramRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['science-program:read']],
    denormalizationContext: ['groups' => ['science-program:write']]
)]
class ScienceProgram
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['science-program:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['science-program:read', 'science-program:write'])]
    private ?string $title = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['science-program:read', 'science-program:write'])]
    private ?string $description = null;

    #[ORM\Column(length: 50, nullable: true)]
    #[Groups(['science-program:read', 'science-program:write'])]
    private ?string $icon = null;

    #[ORM\Column(length: 50, nullable: true)]
    #[Groups(['science-program:read', 'science-program:write'])]
    private ?string $color = null;

    #[ORM\Column(length: 100, nullable: true)]
    #[Groups(['science-program:read', 'science-program:write'])]
    private ?string $link = null;

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

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(?string $link): self
    {
        $this->link = $link;
        return $this;
    }
} 