<?php

namespace App\Entity;

use App\Repository\NewsCategoryRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: NewsCategoryRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['news-category:read']],
    denormalizationContext: ['groups' => ['news-category:write']]
)]
class NewsCategory
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['news-category:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['news-category:read', 'news-category:write'])]
    private ?string $name = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['news-category:read', 'news-category:write'])]
    private ?string $description = null;

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
} 