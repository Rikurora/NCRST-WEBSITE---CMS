<?php

namespace App\Entity;

use App\Repository\NewsArticleRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: NewsArticleRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['news-article:read']],
    denormalizationContext: ['groups' => ['news-article:write']]
)]
class NewsArticle
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['news-article:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['news-article:read', 'news-article:write'])]
    private ?string $title = null;

    #[ORM\Column(type: 'text')]
    #[Groups(['news-article:read', 'news-article:write'])]
    private ?string $content = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['news-article:read', 'news-article:write'])]
    private ?string $image = null;

    #[ORM\Column]
    #[Groups(['news-article:read'])]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(length: 50)]
    #[Groups(['news-article:read', 'news-article:write'])]
    private ?string $status = null;

    #[ORM\ManyToOne(targetEntity: NewsCategory::class)]
    #[Groups(['news-article:read', 'news-article:write'])]
    private ?NewsCategory $category = null;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
    }

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

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;
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

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;
        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;
        return $this;
    }

    public function getCategory(): ?NewsCategory
    {
        return $this->category;
    }

    public function setCategory(?NewsCategory $category): self
    {
        $this->category = $category;
        return $this;
    }
} 