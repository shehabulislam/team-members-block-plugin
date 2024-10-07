<?php
$members = $attributes['members'] ?? [];
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
    <div class="team-members-grid text-3xl">
        <?php foreach ($members as $member) : ?>
            <div class="team-member">
                <?php if (!empty($member['image'])) : ?>
                    <img src="<?php echo esc_url($member['image']); ?>" alt="<?php echo esc_attr($member['name']); ?>" class="team-member-image">
                <?php endif; ?>
                <h3 class="team-member-name"><?php echo esc_html($member['name']); ?></h3>
                <p class="team-member-position"><?php echo esc_html($member['position']); ?></p>
            </div>
        <?php endforeach; ?>
    </div>
</div>