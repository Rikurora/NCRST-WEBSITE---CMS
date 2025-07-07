<?php

namespace App\Entity;

use App\Repository\IksKnowledgeAreaExampleRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: IksKnowledgeAreaExampleRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['iks-knowledge-area-example:read']],
    denormalizationContext: ['groups' => ['iks-knowledge-area-example:write']]
)]
class IksKnowledgeAreaExample
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['iks-knowledge-area-example:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['iks-knowledge-area-example:read', 'iks-knowledge-area-example:write'])]
    private ?string $title = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['iks-knowledge-area-example:read', 'iks-knowledge-area-example:write'])]
    private ?string $description = null;

    #[ORM\ManyToOne(targetEntity: IksKnowledgeArea::class)]
    #[Groups(['iks-knowledge-area-example:read', 'iks-knowledge-area-example:write'])]
    private ?IksKnowledgeArea $knowledgeArea = null;

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

    public function getKnowledgeArea(): ?IksKnowledgeArea
    {
        return $this->knowledgeArea;
    }

    public function setKnowledgeArea(?IksKnowledgeArea $knowledgeArea): self
    {
        $this->knowledgeArea = $knowledgeArea;
        return $this;
    }
} 