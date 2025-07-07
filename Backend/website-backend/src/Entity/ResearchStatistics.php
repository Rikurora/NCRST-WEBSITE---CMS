<?php

namespace App\Entity;

use App\Repository\ResearchStatisticsRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=ResearchStatisticsRepository::class)
 * @ApiResource(
 *     normalizationContext={"groups"={"research-stats:read"}},
 *     denormalizationContext={"groups"={"research-stats:write"}}
 * )
 */
class ResearchStatistics
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"research-stats:read"})
     */
    private ?int $id = null;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"research-stats:read", "research-stats:write"})
     */
    private ?string $category = null;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"research-stats:read", "research-stats:write"})
     */
    private ?string $metric_name = null;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"research-stats:read", "research-stats:write"})
     */
    private ?string $value = null;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"research-stats:read", "research-stats:write"})
     */
    private ?string $description = null;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"research-stats:read", "research-stats:write"})
     */
    private ?string $icon = null;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"research-stats:read", "research-stats:write"})
     */
    private ?int $year = null;

    /**
     * @ORM\Column(type="datetime_immutable")
     * @Groups({"research-stats:read", "research-stats:write"})
     */
    private ?\DateTimeImmutable $created_at = null;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"research-stats:read", "research-stats:write"})
     */
    private ?bool $is_active = true;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"research-stats:read", "research-stats:write"})
     */
    private ?int $display_order = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(string $category): static
    {
        $this->category = $category;
        return $this;
    }

    public function getMetricName(): ?string
    {
        return $this->metric_name;
    }

    public function setMetricName(string $metric_name): static
    {
        $this->metric_name = $metric_name;
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

    public function getYear(): ?int
    {
        return $this->year;
    }

    public function setYear(int $year): static
    {
        $this->year = $year;
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
