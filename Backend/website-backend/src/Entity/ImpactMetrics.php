<?php

namespace App\Entity;

use App\Repository\ImpactMetricsRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=ImpactMetricsRepository::class)
 * @ApiResource(
 *     normalizationContext={"groups"={"impact-metrics:read"}},
 *     denormalizationContext={"groups"={"impact-metrics:write"}}
 * )
 */
class ImpactMetrics
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"impact-metrics:read"})
     */
    private ?int $id = null;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"impact-metrics:read", "impact-metrics:write"})
     */
    private ?string $title = null;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"impact-metrics:read", "impact-metrics:write"})
     */
    private ?string $value = null;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"impact-metrics:read", "impact-metrics:write"})
     */
    private ?string $description = null;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"impact-metrics:read", "impact-metrics:write"})
     */
    private ?string $icon = null;

    /**
     * @ORM\Column(type="datetime_immutable")
     * @Groups({"impact-metrics:read", "impact-metrics:write"})
     */
    private ?\DateTimeImmutable $created_at = null;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"impact-metrics:read", "impact-metrics:write"})
     */
    private ?bool $is_active = true;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"impact-metrics:read", "impact-metrics:write"})
     */
    private ?int $display_order = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;
        return $this;
    }

    public function getValue(): ?string
    {
        return $this->value;
    }

    public function setValue(string $value): static
    {
        $this->value = $value;
        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;
        return $this;
    }

    public function getIcon(): ?string
    {
        return $this->icon;
    }

    public function setIcon(?string $icon): static
    {
        $this->icon = $icon;
        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeImmutable $created_at): static
    {
        $this->created_at = $created_at;
        return $this;
    }

    public function isActive(): ?bool
    {
        return $this->is_active;
    }

    public function setIsActive(bool $is_active): static
    {
        $this->is_active = $is_active;
        return $this;
    }

    public function getDisplayOrder(): ?int
    {
        return $this->display_order;
    }

    public function setDisplayOrder(?int $display_order): static
    {
        $this->display_order = $display_order;
        return $this;
    }
}
