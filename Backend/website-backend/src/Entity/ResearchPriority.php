<?php

namespace App\Entity;

use App\Repository\ResearchPriorityRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ResearchPriorityRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['research-priority:read']],
    denormalizationContext: ['groups' => ['research-priority:write']]
)]
class ResearchPriority
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['research-priority:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['research-priority:read', 'research-priority:write'])]
    private ?string $title = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['research-priority:read', 'research-priority:write'])]
    private ?string $description = null;

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
} 