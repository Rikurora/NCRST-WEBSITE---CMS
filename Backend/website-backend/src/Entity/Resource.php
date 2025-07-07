<?php

namespace App\Entity;

use App\Repository\ResourceRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ResourceRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['resource:read']],
    denormalizationContext: ['groups' => ['resource:write']]
)]
class Resource
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['resource:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['resource:read', 'resource:write'])]
    private ?string $title = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['resource:read', 'resource:write'])]
    private ?string $description = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['resource:read', 'resource:write'])]
    private ?string $file = null;

    #[ORM\Column(length: 100, nullable: true)]
    #[Groups(['resource:read', 'resource:write'])]
    private ?string $type = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['resource:read', 'resource:write'])]
    private ?string $link = null;

    #[ORM\ManyToOne(targetEntity: ResourceCategory::class)]
    #[Groups(['resource:read', 'resource:write'])]
    private ?ResourceCategory $category = null;

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

    public function getFile(): ?string
    {
        return $this->file;
    }

    public function setFile(?string $file): self
    {
        $this->file = $file;
        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(?string $type): self
    {
        $this->type = $type;
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

    public function getCategory(): ?ResourceCategory
    {
        return $this->category;
    }

    public function setCategory(?ResourceCategory $category): self
    {
        $this->category = $category;
        return $this;
    }
} 